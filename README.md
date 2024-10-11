# NextJS
- Delvis TypeScript
- Server- and client-side (exempel silicon-client/app/account/notifications/)
- Cookies för Auth och Tokens
- Hanterar EntityFrameworkCore.Identity utan stöd
- Använder:
  - [silicon-accountProvider](https://github.com/johanbard-win23-jsbackend/silicon-accountProvider)
  - [silicon-profileProvider](https://github.com/johanbard-win23-jsbackend/silicon-profileProvider)
  - [silicon-subscriberProvider](https://github.com/johanbard-win23-jsbackend/silicon-subscriberProvider)
  - [silicon-courseProvider](https://github.com/johanbard-win23-jsbackend/silicon-courseProvider)
  - [silicon-tokenProvider](https://github.com/johanbard-win23-jsbackend/silicon-tokenProvider)
  - [silicon-db-creator](https://github.com/johanbard-win23-jsbackend/silicon-db-creator)

Att deploya NextJS-klient till Azure har varit knepigt. Jag har testat att bygga egna github workflows efter instruktioner på nätet, när det funkade och jag testade sidan fick jag ":( Application Error" utan ytterligare beskrivning. Till slut testade jag att använda App Service Build Service. SUCCESS!!!
