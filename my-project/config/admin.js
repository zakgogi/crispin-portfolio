module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '88ab4cd11e71cc7526b28d0c8223d716'),
  },
});
