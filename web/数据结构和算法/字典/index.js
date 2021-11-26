const m = new Map();

// 增
m.set("a", "aa");
m.set("b", "bb");

// 查
const gresult = m.get("a");

//删
const dresult = m.delete('c');
m.clear();  // 清空所有