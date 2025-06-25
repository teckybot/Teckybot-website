/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'scroll-college': 'scrollCollege 25s linear infinite',
        'scroll-school': 'scrollSchool 35s linear infinite',
        'scroll-testimonial': 'scrollTestimonial 25s ease-in-out infinite', // New animation for testimonials
        'scroll-awards': 'scrollAwards 25s linear infinite',
        'scroll-Intern': 'scrollInternsRight 30s linear infinite'
      },
      keyframes: {
        scrollCollege: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }, // Halfway to create seamless loop
        },
        scrollSchool: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(50%)' }, // Halfway to create seamless loop
        },
        scrollTestimonial: {
          '0%': { transform: 'translateX(0)' },                 // Start at the beginning
          '20%': { transform: 'translateX(0)' },                 // Pause at the first testimonial for 1 sec
          '40%': { transform: 'translateX(-30%)' },             // Move to the second testimonial
          '50%': { transform: 'translateX(-30%)' },             // Pause for 1 sec on the second testimonial
          '70%': { transform: 'translateX(-65%)' },             // Move to the third testimonial
          '80%': { transform: 'translateX(-65%)' },             // Pause for 1 sec on the third testimonial
          '100%': { transform: 'translateX(-100%)' },                    // Hold at the last testimonial (pause for 1 sec before resetting)
        },
        scrollAwards : {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        scrollInternsRight:{
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
}
