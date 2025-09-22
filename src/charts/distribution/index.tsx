import { createSvg, getElementFontSize } from '../utils';

const ARROW_FILL_COLOR = '#CDDDFD';

export interface DistributionChartConfig {
  // data: number[];
  width?: number;
}

export const renderDistributionChart = (container: Element, config: DistributionChartConfig): void => {
  const { width: svgWidth = 2 } = config;
  // if (!data.length) return;

  const chartSize = getElementFontSize(container);

  const svg = createSvg(container, chartSize, chartSize);

  const width = chartSize;
  const height = chartSize;

  // 1. 定义贝塞尔曲线的点
  const startPoint = { x: width * 0.1, y: height }; // 左下角
  const endPoint = { x: width * 0.9, y: height }; // 右下角

  const controlPoint1 = { x: width * 0.5, y: -height * 0.5 };

  // 2. 构建路径字符串
  const pathData = `M${startPoint.x},${startPoint.y} Q${controlPoint1.x},${controlPoint1.y}  ${endPoint.x},${endPoint.y}`;

  // 3. 创建 <path> 元素并设置属性
  svg
    .append('path')
    .attr('d', pathData)
    .attr('stroke', ARROW_FILL_COLOR) // stroke color
    .attr('stroke-width', svgWidth) // stroke width
    .attr('fill', 'none'); // 不填充曲线内部
};
