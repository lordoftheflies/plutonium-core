const json = require('koa-json');
const Koa = require('koa');
const Router = require('@koa/router');
//const jsonapi = require('koa-jsonapi');

const app = new Koa();
const router = new Router();

router.get('/', async (ctx, next) => {
  // ctx.router available
  ctx.body = { foo: 'bar' };
});
router.get('/transactions', async (ctx, next) => {
  // ctx.router available
  ctx.body = [
    {
      title: 'NAV Szociális hozzájárulási adó beszedési számla',
      accountNumber: '10032000-06055912-00000000',
      note: '68453460-2-23',
      payed: false,
      price: { value: 41.462, currency: 'HUF' },
      deadline: new Date(2020, 7, 5),
    },
    {
      title:
        'NAV Személyi jövedelemadó magánszemélyt, őstermelőt, egyéni vállalkozót, kifizetőt terhelő kötelezettség beszedési számla',
      accountNumber: '10032000-06056353-00000000',
      note: '68453460-2-23',
      payed: false,
      price: { value: 31.59, currency: 'HUF' },
      deadline: new Date(2020, 7, 5),
    },
    {
      title:
        'NAV Nyugdíjbiztosítási Alapot megillető bevételek magánszemélyt, őstermelőt, egyéni vállalkozót, kifizetőt terhelő kötelezettség beszedési számla',
      accountNumber: '10032000-06056236-00000000',
      note: '68453460-2-23',
      payed: false,
      price: { value: 21.06, currency: 'HUF' },
      deadline: new Date(2020, 7, 5),
    },
    {
      title:
        'NAV Egészségbiztosítási és munkaerő-piaci járulék magánszemélyt, őstermelőt, egyéni vállalkozót, kifizetőt terhelő kötelezettség beszedési számla',
      accountNumber: '10032000-06057749-00000000',
      note: '68453460-2-23',
      payed: false,
      price: { value: 26.852, currency: 'HUF' },
      deadline: new Date(2020, 7, 5),
    },
  ];
});

app.use(json()).use(router.routes()).use(router.allowedMethods());

app.listen(9001);
