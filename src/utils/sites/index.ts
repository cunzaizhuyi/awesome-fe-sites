import { techSites } from './techSites';
import { weekly } from "./weekly";
import { blog, teamBlog } from "./blog";
import {echartsDemo } from "./echarts";
import { spec } from "./spec";
import { ossSites } from "./ossSites";
import { cssUtilSites, jsUtilSites, picUtilsSites, iconUtilsSites, drawUtilsSites, regexpUtilsSites, serviceUtilSites } from './utilSites';

export const allSites = [
  // 技术站点
  techSites,
  // 周刊
  teamBlog,
  // 高质量个人博客；技术团队/技术组织博客
  weekly,
  blog,
  // 技术规范
  spec,
  // 热门开源项目站点
  ossSites,
  echartsDemo,
  // 工具站点
  cssUtilSites,
  jsUtilSites,
  picUtilsSites,
  iconUtilsSites,
  drawUtilsSites,
  regexpUtilsSites,
  serviceUtilSites,

]
