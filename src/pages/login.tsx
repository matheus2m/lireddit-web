import React from 'react';
import { Form, Formik } from 'formik';
import {
  Box,
  Button,
} from '@chakra-ui/core';
import Wrapper from '../components/Wrapper';
import InputField from '../components/InputField';
import { useLoginMutation } from '../generated/graphql';
import { toErrorMap } from '../utils/toErrorMap';
import { useRouter } from 'next/router';

const Login: React.FC<{}> = ({}) => {
  const router = useRouter();
  const [, login] = useLoginMutation();

  return (
    <Wrapper variant='small'>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={async (values, { setErrors }) => {
          const res = await login({ options: values });
          if (res.data?.login.errors) {
            setErrors(toErrorMap(res.data.login.errors));
          } else if (res.data?.login.user) {
            router.push('/');
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Form>
              <InputField name='username' label='Username' />
              <Box mt={4}>
                <InputField name='password' label='Password' type='password' />
              </Box>
              <Button
                type='submit'
                variantColor='teal'
                mt={4}
                isLoading={isSubmitting}
              >
                Login
              </Button>
            </Form>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default Login;
