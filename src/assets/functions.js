export function canAccess(user, item) {
    let access = false;
    user.permissions?.forEach(el => {
        if (el.name === item || el.name === 'all')
            access = true
        return true;
    })
    return access
}