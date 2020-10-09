import React from 'react';
import { Form, Formik } from 'formik';
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/core';
import Wrapper from '../components/Wrapper';
import InputField from '../components/InputField';
import { useRegisterMutation } from '../generated/graphql';

interface registerProps {}

const Register: React.FC<registerProps> = ({}) => {
  const [, register] = useRegisterMutation();

  return (
    <Wrapper variant='small'>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={async (values) => {
          const res = await register(values);
          res.data.register?.user?.id
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
                register
              </Button>
            </Form>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default Register;
