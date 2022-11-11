const parser = require('./parser');

module.exports.validate = (dataLinks) => {
    const promises = dataLinks.map((url) => {
        return fetch(url.href)
            .then((response) => {
                if(response.statusText == 'OK'){
                            
                            const okLink = {
                                href: url.href,
                                text: url.text,
                                file: url.file,
                                status: response.status,
                                ok: 'Ok'
                            }
                            return okLink;
                }else{
                            const failedLink = {
                                href: url.href,
                                text: url.text,
                                file: url.file,
                                status: response.status,
                                ok: 'Fail'
                            }
                            return failedLink;
                }
            })
            .catch(function(err) {
                console.log(err.message);
                const object = {
                    status: err.message,
                    message: err.statusText,
                }
                return object
            });

   });
    return Promise.all(promises);
}