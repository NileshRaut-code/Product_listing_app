
export function filters(datas,searchtxt){
    //

    const res = datas.filter((dat) => dat.title.toLowerCase().includes(searchtxt.toLowerCase()));
    return res;

}