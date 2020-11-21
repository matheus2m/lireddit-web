import { Box, Button, Flex, Link } from '@chakra-ui/core';
import React from 'react';
import NextLink from 'next/link';
import { useMeQuery } from '../generated/graphql';
interface NavBarProps {}

export const NavBar: React.FC = () => {
  const [{ data, fetching }] = useMeQuery();

  let body = null;

  if (fetching) {
    return <>Loading</>;
  } else if (!data?.me) {
    body = (
      <>
        <NextLink href='/login'>
          <Link color='white' mr={2}>
            Login
          </Link>
        </NextLink>
        <NextLink href='/register'>
          <Link color='white'>Register</Link>
        </NextLink>
      </>
    );
  } else {
    body = (
      <Flex>
        <Box mr={2}>{data.me.username}</Box>
        <Button variant='link'> Logout</Button>
      </Flex>
    );
  }

  return (
    <Flex bg='#2F52E0' padding={4} ml='auto'>
      <Box ml='auto'>{body}</Box>
    </Flex>
  );
};
