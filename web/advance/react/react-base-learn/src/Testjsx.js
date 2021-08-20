export default function Testjsx() {
    const name = '陈小名的jsx例子';
    const ele = <div>eg:n{name}</div>
    const user = {
        firstName: "陈",
        lastName: "小名"
    }
    const formatName = function(user) {
        return `${user.firstName}-${user.lastName}`
    }
    return (
        <div>
            {ele}
            {formatName(user)}
        </div>
    )
}