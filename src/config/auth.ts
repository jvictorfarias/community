interface AuthConfig {
  secret: string;
  expiresIn: string;
}

export default {
  secret: process.env.AUTH_SECRET,
  expiresIn: '30d',
} as AuthConfig;
