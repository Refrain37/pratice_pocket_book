import React from 'react'
import './index.css'
import {
	Chart,
	Interval,
	Tooltip,
	Axis,
	Coordinate,
	Interaction,
  getTheme,
  Line,
  Point
} from 'bizcharts';

export default function Count() {
  const data1 = [
		{ item: '交通', count: 40, percent: 0.4 },
		{ item: '学习', count: 21, percent: 0.21 },
		{ item: '购物', count: 17, percent: 0.17 },
		{ item: '娱乐', count: 13, percent: 0.13 },
		{ item: '其他', count: 9, percent: 0.09 },
  ];
  const data2 = [
    {
      month: "1月",
      value: 3,
    },
    {
      month: "2月",
      value: 4,
    },
    {
      month: "3月",
      value: 3.5,
    },
    {
      month: "4月",
      value: 5,
    },
    {
      month: "5月",
      value: 4.9,
    },
    {
      month: "6月",
      value: 3.5,
    },
    {
      month: "7月",
      value: 7,
    },
    {
      month: "8月",
      value: 7,
    },
    {
      month: "9月",
      value: 6,
    },
    {
      month: "10月",
      value: 6.5,
    },
    {
      month: "11月",
      value: 5.5,
    },
    {
      month: "12月",
      value: 7,
    },
  ];

	const cols = {
		percent: {
			formatter: (val:any) => {
				val = val * 100 + '%';
				return val;
			},
		},
	};


	return (
		<div className={'count-container'}>
      <h2>支出统计</h2>
      <div className={'chart-box'}>
        <Chart height={300} data={data1} scale={cols} autoFit>
          <Coordinate type="theta" radius={0.75} />
          <Tooltip showTitle={false} />
          <Axis visible={false} />
          <Interval
            position="percent"
            adjust="stack"
            color="item"
            style={{
              lineWidth: 1,
              stroke: '#fff',
            }}
            label={['count', {
              content: (data) => {
                return `${data.item}: ${data.percent * 100}%`;
              },
            }]}
            state={{
              selected: {
                style: (t) => {
                  const res = getTheme().geometries.interval.rect.selected.style(t);
                  return { ...res, fill: 'red' }
                }
              }
            }}
          />
          <Interaction type='element-single-selected' />
        </Chart>
      </div>
      <div className={'chart-box'}>
        <Chart
          padding={[10, 20, 50, 50]}
          autoFit
          height={150}
          data={data2}
          scale={{ value: { min: 0, max: 10 } }}
          onAxisLabelClick={((e:any) => {
            const { axis } = e.gEvent.delegateObject;
            debugger
            alert(`you clicked axis: ${axis.get('field')}`)
          })}
        >
          <Line position="month*value" tooltip={['month*value', (y, v) => {
            return {
              title: `${y}`,
              name: 'value',
              value: `${v}k`
            }
          }]} />
          <Point position="month*value" />
          <Tooltip showCrosshairs lock triggerOn='click' />
          <Axis name='value' title={{
            style: {
              fontSize: 12
            }
          }} />
        </Chart>
      </div>
    </div>
  )
}
