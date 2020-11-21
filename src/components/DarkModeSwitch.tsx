import { Button, useColorMode } from '@chakra-ui/core';
export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  return (
    <Button onClick={toggleColorMode} float="right" margin='10px'>
      Toogle theme
    </Button>
  );
};
