import { EmailValidatorAdapter } from './validation/email-validator-class-adapter';
import { emailValidatorFnAdapter } from './validation/email-validator-fn-adapter';
import {
  EmailValidatorFnProtocol,
  EmailValidatorProtocol,
} from './validation/email-validator-protocol';

function validaEmailClass(
  emailValidator: EmailValidatorProtocol,
  email: string,
): void {
  if (emailValidator.isEmail(email)) {
    console.log('Email válido');
  } else {
    console.log('Email inválido');
  }
}

function validaEmailFn(
  emailValidator: EmailValidatorFnProtocol,
  email: string,
): void {
  if (emailValidator(email)) {
    console.log('Email válido');
  } else {
    console.log('Email inválido');
  }
}

validaEmailClass(new EmailValidatorAdapter(), 'alexandre');
validaEmailClass(new EmailValidatorAdapter(), 'abueno.silva@gmail.com');

validaEmailFn(emailValidatorFnAdapter, 'alexandre');
validaEmailFn(emailValidatorFnAdapter, 'abueno.silva@gmail.com');
