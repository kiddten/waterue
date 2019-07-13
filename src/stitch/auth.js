import {
  AnonymousCredential,
  UserPasswordCredential,
  UserPasswordAuthProviderClient,
} from 'mongodb-stitch-browser-sdk'

import { app } from './app.js'

export function loginAnonymous () {
  // Allow users to log in anonymously
  const credential = new AnonymousCredential()
  return app.auth.loginWithCredential(credential)
}

function getEmailPasswordClient () {
  return app.auth.getProviderClient(
    UserPasswordAuthProviderClient.factory,
    'local-userpass',
  )
}

export async function registerEmailPasswordUser (email, password) {
  const emailPasswordAuth = getEmailPasswordClient()
  return await emailPasswordAuth.registerWithEmail(email, password)
}

export async function confirmEmailPasswordUser () {
  // eslint-disable-next-line compat/compat
  const urlParams = new URLSearchParams(window.location.search)
  const token = urlParams.get('token')
  const tokenId = urlParams.get('tokenId')
  const emailPasswordAuth = getEmailPasswordClient()
  return await emailPasswordAuth.confirmUser(token, tokenId)
}

export async function loginEmailPassword (email, password) {
  const credential = new UserPasswordCredential(email, password)
  return await app.auth.loginWithCredential(credential)
}
