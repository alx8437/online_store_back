class ApiError extends Error {
    constructor(status, message) {
        super();
        this.status = status
        this.message = message
    }
    /* Статические функции - это такие функции, которые можно вызывать без создания объекта
    Можем напрямую обращаться напрямую к классу и возвращать ту или иную функцию */

    static badRequest(message) {
        return new ApiError(404, message)
    }

    static internal(message) {
        return new ApiError(500, message)
    }

    static forbidden(message) {
        return new ApiError(403, message)
    }
}

module.exports = ApiError