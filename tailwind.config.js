// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'primary': '#3490dc',
          'secondary': '#ffed4a',
          'danger': '#e3342f',
          'morfit-white' : '#e0e0e0'
        },
        transitionDelay: {
            '0.5s': '0.5s',
            '1s': '1s',
            '2s': '2s',
        },
        maxWidth: { 
            '50p': '50%',
            "20vh": "20vh",
            "90p": "90%",
        },
        minWidth: { 'screen': '100vw'},
      },
      boxShadow: {
        'morfit-inset': 'inset -6px -6px 12px #848484, inset 6px 6px 12px #ffffff;',
      },
    },
    plugins: [],
  }

//   border-radius: 45px;
// background: #e0e0e0;
// box-shadow: inset -12px -12px 24px #9b9b9b,
//             inset 12px 12px 24px #ffffff;