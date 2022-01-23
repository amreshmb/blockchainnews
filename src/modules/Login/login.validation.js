import * as yup from "yup";
import { LoginErrors } from "../../common/constants/errors";
import { PrivateKey, PublicKey } from '@steemit/steem-js/lib/auth/ecc';
export const loginSchema = yup
  .object()
  .shape({
    username: yup.string().required(LoginErrors.USERNAME_REQUIRED).min(3, LoginErrors.MIN).max(18, LoginErrors.MAX),
    password: yup.string().required(LoginErrors.PASSWORD_REQUIRED).trim().test((value)=>{
        if(value){
           return checkPasswordChecksum(value)
        }
        return true;
    }),
  })
  .required();

function checkPasswordChecksum(password) {
    // A Steemit generated password is a WIF prefixed with a P ..
    // It is possible to login directly with a WIF
    const wif = /^P/.test(password) ? password.substring(1) : password;

    if (!/^5[HJK].{45,}/i.test(wif)) {
        // 51 is the wif length
        // not even close
        return undefined;
    }

    return PrivateKey.isWif(wif);
}