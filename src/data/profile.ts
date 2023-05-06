/**
 * 基本信息
 */
const proinfo = {
  name_CN: "冯涛",
  name_EN: "Nate Ford",
  title: "全栈&测试开发工程师(SDET)",
  tel: "17701503218",
  email: "fengtao.1314520@163.com",
  resume: "fengtao1314520.github.io/resume",
  base: "江苏, 常州",
  desc: "超过10年自动化测试与开发经验, 可以独立主导桌面程序、Web端、APP和基于协议的嵌入式软件、系统的自动化测试的开发工作; 具有基于VUE.JS(2/3)与Vuetify.js独立开发web网站的经验, 以及具有基于C#开发后端服务、程序的经验.",
};

/**
 * 个人简介
 */
const profile = [
  /**
    {
      icon: 'mdi-dots-horizontal-circle-outline',
      text: '独立开发RoWarlock自动化测试工具&管理系统',
    },
     **/
  {
    icon: "mdi-dots-horizontal-circle-outline",
    text: "针对不同平台的软件具有独立开发完整自动化测试工具、框架、脚本体系的经验",
  },
  {
    icon: "mdi-dots-horizontal-circle-outline",
    text: "熟悉和了解电子秤的嵌入式软件的功能测试和自动化测试工作",
  },
  {
    icon: "mdi-dots-horizontal-circle-outline",
    text: "熟悉和擅长设计、编写测试计划、测试用例、测试执行等各位文档",
  },
  {
    icon: "mdi-dots-horizontal-circle-outline",
    text: "拥有基于Vue.js框架开发前端网站, 基于C#开发后端系统的经验",
  },
  {
    icon: "mdi-dots-horizontal-circle-outline",
    text: "具有一定的测试团队管理能力",
  },
];
// 工作经历
const experience = [
  {
    icon: "mdi-map-marker-circle",
    text: "全栈测试工程师",
    content: {
      company: "梅特勒·托利多",
      dept: "商衡事业部(RTPO)",
      datetime: "2017-02~至今",
      desc: "PC上位机包含Web版和桌面端以及云端, 旨在PC端对嵌入式秤、PC秤进行数据管理, 秤管理、各类自动化执行以及数据回传保存和生成报表以及复杂操作.",
      todo: [
        "1.牵头MTStar,ScaleManager两款上位机软件的测试工作, ",
        "2.规划与制定测试计划,  安排测试任务,  编写测试报告并汇总研发&测试的最终释放文档.",
        "3.设计并开发MTStar软件的自动化测试脚本与执行工具, 搭建上位机与电子秤的实际测试环境.",
        "4.负责PO&MO的售前、售后衔接工作,  针对国内外不同区域的客户的需求提供售前、售后支持, 推动新业务、项目的落地.",
        "5.参与秤内自动化测试工具维护和改进, 提供新工具与新脚本架构的设计思路与Demo.",
        "6.参与公司内部项目技术分享以及交流.",
      ],
    },
  },
  {
    icon: "mdi-map-marker-circle",
    text: "自动化测试工程师",
    content: {
      company: "江苏赞奇科技有限公司",
      dept: "测试部",
      datetime: "2015-08~2017-02",
      desc: "专业云平台, 提供私有、公有云渲染服务,包含集群、客户端、web端控制台等软件",
      todo: [
        "1.负责云渲染平台的网站, 后台管理网站, 客户端和集群机的功能测试, ",
        "2.负责和建设云渲染平台的自动化测试工具开发.",
      ],
    },
  },
  {
    icon: "mdi-map-marker-circle",
    text: "测试主管、自动化测试工程师",
    content: {
      company: "无锡文思海辉",
      dept: "GB1国内移动业务事业部, GB5欧美事业部",
      datetime: "2011-02~2015-08",
      desc: "国内最大的离岸服务外包公司,  游戏基地为江苏移动的移动端手机游戏APP商城,  展讯为展讯芯片兼容与APP测试,  HP为HP scan自动化工具开发和自动化测试",
      todo: [
        /*
         *  // todo  突出管理方面的优势
         * */
        "1.负责管理团队的架构、规划与人员规划,  对事业部内的测试工程师进行日常招聘、培训、任务分配、管理与考核, ",
        "2.负责制定事业部门内测试验收标注,  协同PM编写标书、各类质量报表、绩效报表、年表等提交客户, ",
        "3.负责管理事业部内的移动设备资产, 提供技术支持, 例如各安卓机型版本升降级,  搭建WIFI测试环境和其他必要的测试环境, ",
        "4.负责事业部与各学校的校企合作、合作方公司、兼职人员的相关人员绩效考核,  推动各合作方的质量保障提升, ",
        "5.负责带领团队参与多事业部的合作与协作项目, 统筹与管理合作项目的各项事务,成功推动华为巴西电信项目成功实施,  ",
        "6.负责HP print项目的自动化测试脚本开发工作, 协调印度、美国两地的测试工程师研发沟通工作, ",
        "7.领导HP scan项目的整体自动化测试工具、脚本架构与设计工作,  领导开发HP scan产品的自动化测试工具和测试脚本, 推动HP scan项目组APP自动化测试成功落地.",
      ],
    },
  },
];
// 项目经历
const projects = [
  /**{
      icon: 'mdi-card-bulleted-outline',
      text: 'RoWarlock (PRO)',
      datetime: '2020-02~至今',
      company: '个人项目',
      position: '独立研发、测试',
      desc: 'RoWarlock是一个覆盖多端、包含全流程的现代化自动化测试工具.为客户提供一个具有可视化的, 简易操作的重前端式的自动化测试工具.',
      content: {
        tech: [
          'VUE.JS',
          'VUETIFY.JS',
          'JavaScript',
          'TypeScript',
          '.NET C#',
          'Playwright',
          'Postman',
        ],
        todo: [
          '1.设计和完善系统的整体架构, 包括系统的功能、模块、接口、数据库等, ',
          '2.研发完整的Web前端的各个功能, 包含dashboard, 释放管理, 用例管理, 报告管理等,  使用vue.js+vuetify.js技术进行开发, ',
          '3.研发完整的服务后端的各个功能, 包含调度中心, 任务管理器, 通讯管理等,  使用.net c#技术进行开发, ',
          '4.设计自动化测试脚本用例架构,  研发完整的自动化测试脚本执行工具, 使用Typescript技术进行开发.',
        ],
        done: [
          '1.还在进行中, ',
          '2.已完成前端EAP版本研发, ',
          '3.已完成后端部分功能研发, ',
          '4.已完成自动化测试脚本工具研发.',
        ],
      },
    },**/
  {
    icon: "mdi-card-bulleted-outline",
    text: "MTStar/Scale Manager",
    datetime: "2017-02~至今",
    company: "梅特勒 托利多 (商衡事业部)",
    position: "全栈测试工程师",
    desc: "MTStar/Scale Manager为梅特勒托利多的商用衡器的PC端管理软件, 可以对电子秤进行数据管理, 秤管理, 秤设置等操作, 并可对秤进行远程操作与管理.并支持电子秤数据的导入导出进行计划管理.",
    content: {
      tech: [
        "功能测试",
        "Web UI 自动化",
        "CASE架构",
        ".NET C#",
        "Selenium",
        "XML/XSD",
        "Python",
        "TypeScript",
        "C++",
      ],
      todo: [
        "1.编写和执行上位机软件的功能测试用例.",
        "2.负责上位机软件的释放与管理工作.",
        "3.基于Selenium/Playwright编写上位机软件的自动化测试脚本.",
        "4.使用.net C#编写上位机软件的自动化测试执行工具.",
      ],
      done: [
        "1.保障了MTStar/Scale Manager的产品质量, 不断提高交付效率, 全年流出BUG率为0.",
        "2.为客户提供多重的产品质量保障, 为赢得客户订单提供了更多的产品优势.",
      ],
    },
  },
  {
    icon: "mdi-card-bulleted-outline",
    text: "Archone TestTool",
    datetime: "2019-01~2019-08",
    company: "梅特勒 托利多 (商衡事业部)",
    position: "测试开发工程师",
    desc: "Archone TestTool为梅特勒托利多的商用衡器的秤内自动化测试工具, 可以对电子秤进行基于ComOne协议的自动化测试.",
    content: {
      tech: [
        "功能测试",
        "Web UI 自动化",
        "CASE架构",
        ".NET C#",
        "Selenium",
        "XML/XSD",
        "Python",
        "TypeScript",
        "C++",
      ],
      todo: [
        "1.使用C++开发与改进Archone TestTool的部分功能.",
        "2.针对原始Archone TestTool支持的xml脚本提出新脚本思路和设计理念.",
        "3.根据Archone平台的测试协议重新开发全流程工具与测试脚本, 使用Typescript与C#开发.",
      ],
      done: [
        "1.提升了测试工具的执行效率, 提供更多的客户访问方法.",
        "2.为下一代的测试工具与平台提供可行性预研.",
      ],
    },
  },
  {
    icon: "mdi-card-bulleted-outline",
    text: "赞奇云渲染平台测试",
    datetime: "2015-08~2017-02",
    company: "江苏赞奇科技有限公司",
    position: "自动化测试工程师工程师",
    desc: "赞奇云渲染平台是全国最大的云渲染平台, 提供在线渲染静态图、效果图、动画、长动画等在线渲染服务.",
    content: {
      tech: ["功能测试", ".NET C#", "Selenium", "XML/XSD"],
      todo: [
        "1.参与赞奇云渲染平台的各个功能模块测试, 协同其他测试工程师完成相关功能测试, 撰写对应测试模块的测试报告并提交.",
        "2.负责赞奇云渲染平台的前台和后台管理网站的自动化测试.",
      ],
      done: [
        "1.保障了赞奇云渲染平台各个模块的释放质量, ",
        "2.预研了赞奇云渲染平台中基于web的各个功能模块的自动化测试技术.",
      ],
    },
  },
  {
    icon: "mdi-card-bulleted-outline",
    text: "HP打印机与扫描机自动化测试",
    datetime: "2011-02~2013-08",
    company: "无锡文思海辉",
    position: "自动化测试开发工程师",
    desc: "HP是全球最大的打印机和扫描机生产商, 文思海辉HP团队整体负责HP全球的打印机与扫描机的新产品测试.",
    content: {
      tech: ["Powershell", ".NET C#", "Calabash", "Cucumber", "Ruby"],
      todo: [
        "1.负责HP打印机的自动化测试工作, 基于HP Topcat自动化测试工具和VMPS执行工具进行自动化测试脚本编写和执行.",
        "2.领导HP扫描机的手机APP端自动化测试工作, 基于Cucumber测试框架开发APP端自动化测试工具和测试脚本架构.",
        "3.协调印度与美国的HP扫描机团队的测试工作, 统一规划整个团队HP scan的自动化测试工作.",
      ],
      done: [
        "1.从零开始搭建了HP scan团队的APP自动化测试体系.",
        "2.为HP的打印机多个新产品提供了有力的质量保障.",
        "3.为HP上海团队提供了Topcat工具改进的新方法, 包含移动端和web端的自动化测试的技术预研工作.",
      ],
    },
  },
  {
    icon: "mdi-card-bulleted-outline",
    text: "游戏基地",
    datetime: "2011-02~2013-08",
    company: "无锡文思海辉",
    position: "测试主管",
    desc: "游戏基地是江苏移动主营的手机端游戏APP商城, 提供手机游戏下载、付费和充值等服务.",
    content: {
      tech: ["Powershell", ".NET C#", "Calabash", "Cucumber", "Ruby"],
      todo: [
        "1.负责管理游戏基地项目组日常工作, 包含行政管理和业务管理两部分.",
        "2.负责采购和管理游戏基地使用的手机以及硬件设备, 包含超过300款不同类型的手机.",
        "3.负责测试各个游戏在不同机型上的执行表现, 参照测试用例执行测试, 汇总结果并提交服务商报告.",
      ],
      done: [
        "1.保障了江苏移动的游戏基地内超过数万款的上线游戏的产品质量.",
        "2.为客户提供了7*24小时的产品质量保证服务, 为部分客户挽回了大量因付费问题产生的异常流水资金.",
      ],
    },
  },
];

export { proinfo, profile, experience, projects };
