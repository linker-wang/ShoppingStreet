const TIME_OUT = 6000

export class MyRequest {
    constructor(config) {
        this.timeout = config?.timeout || TIME_OUT
        this.header = config?.header || {}
        this.baseUrl = config?.baseUrl || ""
    }

    request(url, method, data, header) {
        return new Promise((resolve, reject) => {
            uni.request({
                url: this.baseUrl + url,
                method: method ? method : undefined,
                data: data ? data : undefined,
                timeout: this.timeout,
                header: { ...this.header, ...header },
                success: (res) => {
                    resolve(res.data)
                },
                fail: (err) => {
                    reject(err)
                }
            })
        })
    }

    get(url, header) {
        return this.request(url, "GET", null, header)
    }

    post(url, params, header) {
        return this.request(url, "POST", params, header)
    }
}