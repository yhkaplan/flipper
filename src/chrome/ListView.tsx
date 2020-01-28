/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import {
  Text,
  FlexColumn,
  styled,
  FlexRow,
  Button,
  Spacer,
  Checkbox,
  colors,
  View,
  Tooltip,
} from '../ui';
import React, {Component} from 'react';

export type SelectionType = 'multiple' | 'single';

type SubType =
  | {
      selectedElements: Set<string>;
      type: 'multiple';
    }
  | {
      selectedElement: string;
      type: 'single';
    };

export type Element = {
  label: string;
  id: string;
  unselectable?: {toolTipMessage: string};
};
type Props = {
  onSubmit?: () => void;
  onChange: (elements: Array<string>) => void;
  onHide: () => any;
  elements: Array<Element>;
  title?: string;
} & SubType;

const Title = styled(Text)({
  margin: 6,
});

type State = {
  selectedElements: Set<string>;
};

const Container = styled(FlexColumn)({
  padding: 8,
});

const Line = styled(View)({
  backgroundColor: colors.greyTint2,
  height: 1,
  width: 'auto',
  flexShrink: 0,
});

const RowComponentContainer = styled(FlexColumn)({
  overflow: 'scroll',
  height: 'auto',
  backgroundColor: colors.white,
  maxHeight: 500,
});

const Padder = styled.div<{
  paddingLeft?: number;
  paddingRight?: number;
  paddingBottom?: number;
  paddingTop?: number;
}>(({paddingLeft, paddingRight, paddingBottom, paddingTop}) => ({
  paddingLeft: paddingLeft || 0,
  paddingRight: paddingRight || 0,
  paddingBottom: paddingBottom || 0,
  paddingTop: paddingTop || 0,
}));

type RowComponentProps = {
  id: string;
  label: string;
  selected: boolean;
  onChange: (name: string, selected: boolean) => void;
  disable: boolean;
  toolTipMessage?: string;
};

class RowComponent extends Component<RowComponentProps> {
  render() {
    const {id, label, selected, onChange, disable, toolTipMessage} = this.props;
    return (
      <FlexColumn>
        <Tooltip
          title={disable ? toolTipMessage : null}
          options={{position: 'toRight'}}>
          <Padder
            paddingRight={8}
            paddingTop={8}
            paddingBottom={8}
            paddingLeft={8}>
            <FlexRow>
              <Text> {label} </Text>
              <Spacer />
              <Checkbox
                checked={selected}
                onChange={selected => {
                  onChange(id, selected);
                }}
              />
            </FlexRow>
          </Padder>
          <Line />
        </Tooltip>
      </FlexColumn>
    );
  }
}

export default class ListView extends Component<Props, State> {
  state: State = {selectedElements: new Set([])};
  static getDerivedStateFromProps(props: Props, _state: State) {
    if (props.type === 'multiple') {
      return {selectedElements: props.selectedElements};
    } else if (props.type === 'single') {
      return {selectedElements: new Set([props.selectedElement])};
    }
    return null;
  }

  handleChange = (id: string, selected: boolean) => {
    let selectedElements: Set<string> = new Set([]);
    if (this.props.type === 'single') {
      if (!selected) {
        this.setState({selectedElements: selectedElements});
        this.props.onChange([...selectedElements]);
      } else {
        selectedElements.add(id);
        this.setState({selectedElements: selectedElements});
        this.props.onChange([...selectedElements]);
      }
    } else {
      if (selected) {
        selectedElements = new Set([...this.state.selectedElements, id]);
        this.props.onChange([...selectedElements]);
      } else {
        selectedElements = new Set([...this.state.selectedElements]);
        selectedElements.delete(id);
        this.props.onChange([...selectedElements]);
      }
    }
  };

  render() {
    const {onSubmit} = this.props;
    return (
      <Container>
        <FlexColumn>
          {this.props.title && <Title>{this.props.title}</Title>}
          <RowComponentContainer>
            {this.props.elements.map(({id, label, unselectable}) => {
              return (
                <RowComponent
                  id={id}
                  label={label}
                  key={id}
                  selected={this.state.selectedElements.has(id)}
                  onChange={this.handleChange}
                  disable={unselectable != null}
                  toolTipMessage={unselectable?.toolTipMessage}
                />
              );
            })}
          </RowComponentContainer>
        </FlexColumn>
        {onSubmit && (
          <Padder paddingTop={8} paddingBottom={2}>
            <FlexRow>
              <Spacer />
              <Button compact padded onClick={this.props.onHide}>
                Close
              </Button>
              <Tooltip
                title={
                  this.state.selectedElements.size <= 0
                    ? `Please select atleast one plugin`
                    : null
                }
                options={{position: 'toRight'}}>
                <Button
                  compact
                  padded
                  type="primary"
                  onClick={onSubmit}
                  disabled={this.state.selectedElements.size <= 0}>
                  Submit
                </Button>
              </Tooltip>
            </FlexRow>
          </Padder>
        )}
      </Container>
    );
  }
}
