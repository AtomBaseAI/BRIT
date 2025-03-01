/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public'
})

module.exports = withPWA({
  // next.js config

    // Set the `amp` flag to true
    amp: true,
  
    // Set the `future` flag to true
    // future: {
    //   webpack5: true,
    //   strictPostcssConfiguration: true
    // },
})