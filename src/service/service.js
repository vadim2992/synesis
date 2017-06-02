import $ from 'jquery';

/**
 * This part make ajax for app
 */
const appService = {
    getData: (url) => {
        const d = $.Deferred();
        $.ajax({
            url: url,
            crossDomain: true,
            origin: '*'
        }).done((response) => {
            d.resolve(JSON.parse(response));
        }).fail(d.reject);

        return d.promise();
    }
};

export default appService;