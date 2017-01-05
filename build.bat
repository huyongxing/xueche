@echo off
title XueChe编译

mvn -version >nul 2>&1 && (
    echo 正在编译...
    mvn -T %NUMBER_OF_PROCESSORS% clean package
) || (
    echo 请安装apache-maven，并配置环境变量！
)

pause