## 构建项目

- create-react-app react-oms-admin
- cd react-oms-admin
- npm start

启动项目成功，其实create-react-app脚手架是基于webpack构建的，但是我们却是没有看到类似config、webpack.config.js这样的配置文件夹和文件，仔细看package.json的script命令，这里有一个eject命令，即反编译命令，运行npm run eject即可反编译出webpack的配置文件（config、script文件夹），这样讲方便我们后续定制一些配置


