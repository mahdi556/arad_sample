module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["192.168.1.102","192.168.1.4"],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    
  },
  
},
{
  swcMinify: false // it should be false by default 
  }
  
