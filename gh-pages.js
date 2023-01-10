var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'portfolio',
        repo: 'https://github.com/AlexDavies8/alexdavies8.github.io.git', // Update to point to your repository  
        user: {
            name: 'AlexDavies8', // update to use your name
            email: 'alex@frogtrade.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)