//数值每隔三位价格逗号
function format(str){
	return str.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
}
//数值超过三/四位数去掉0换成指定字符串
function giveformat(num,type) {
	if(num>999){
		return (num / 1000) + type
	}else if(num > 9999){
		return (num / 10000) + type
	}else{
		return num
	}
}

function overflowtext(text, len) {
	if (text.length <= len) {
		return text + "..."
	} else {
		return text.substring(0, len) + "..."
	}
}
export {format,giveformat,overflowtext}