import * as React from 'react';
import { Button, Flex } from '@fluentui/react-northstar';

const ButtonExampleEmphasis = () => (
  <Flex gap="gap.smaller">
    <Button content="Primary" primary />
    <Button content="Default" />
    <Button content="Tinted" tinted />
  </Flex>
);

export default ButtonExampleEmphasis;
