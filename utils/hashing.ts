const bcrypt = require("bcrypt")
export function hashPass(unHash: string) {
    return bcrypt.hash(unHash, 10).then(function(hash: string) {
        return hash;
    });
}

export function isSame(unHash: string, hashed: string) {
    return bcrypt.compare(unHash, hashed).then(function(result: boolean) {
        return result;
    });
} 