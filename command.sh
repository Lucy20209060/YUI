if [ -n "$1" ];then
	git add -A
	git commit -m $1
	git pull origin master
	git push origin master
	echo "\033[31m ==> 代码已提交至Lucy20209060/YUI \033[0m"
else
	echo "\033[31m 请输入commit描述 \033[0m"
fi