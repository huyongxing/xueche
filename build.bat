@echo off
title XueChe����

mvn -version >nul 2>&1 && (
    echo ���ڱ���...
    mvn -T %NUMBER_OF_PROCESSORS% clean package
) || (
    echo �밲װapache-maven�������û���������
)

pause