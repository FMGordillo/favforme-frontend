# FavForMe Landing

Develop: [![Build Status](https://favforme.semaphoreci.com/badges/landing/branches/develop.svg?key=81cd66f4-0449-4645-bcfd-731657d92a7d)](https://favforme.semaphoreci.com/projects/landing)
Main: [![Build Status](https://favforme.semaphoreci.com/badges/landing/branches/main.svg?key=81cd66f4-0449-4645-bcfd-731657d92a7d)](https://favforme.semaphoreci.com/projects/landing)

## Getting started

You should have installed:

- [asdf](https://asdf-vm.com/#/)
- (Optional) [Docker](https://docs.docker.com/get-docker/)
- (Optional) [direnv](https://direnv.net/)

1. `asdf install`
2. `git config --local core.hooksPath git-hooks`
3. `npm install`
4. Run your server, and then `npm run dev`

## How set SSL

Thanks to [this issue from Prisma repository](https://github.com/prisma/prisma/issues/1673#issuecomment-647107891)

Requisites:

- `openssl`
- PostgreSQL configured properly
- PostgreSQL SSL credentials

1. `openssl pkcs12 -export -out {FILE_TO_CONVERT}.p12 -inkey {CLIENT_KEY_FROM_GCP}.pem -in {CLIENT_CERT_FROM_GCP}.pem`
2. Visit [`AES Encryptation and Decryptation Online` ](https://www.devglan.com/online-tools/aes-encryption-decryption) and follow [this steps](https://leerob.io/blog/vercel-env-variables-size-limit#encryption-example)
3. Paster the result in `lib/prisma.ts` variable (you'll know).

## Credentials

```
# Google Analytics:

GA_PRODUCTION=G-G2F19FBMTQ
GA_TESTING=G-N1SWDDR210
```

## TO DO:

- [ ] Tener ingles/español
- [ ] ... tareas de Trello
