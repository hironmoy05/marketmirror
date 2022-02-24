import React from 'react';
import {Graph} from '../components';
import {ScrollView} from 'react-native';
// import {  VictoryLine, VictoryChart, VictoryAxis, VictoryLabel } from 'victory-native';
import {VictoryCustomTheme} from '../styles';

export function GraphContainer() {
  const data = [
    {quarter: 1, earnings: 13000},
    {quarter: 2, earnings: 16500},
    {quarter: 3, earnings: 14250},
    {quarter: 4, earnings: 19000},
  ];

  return (
    <ScrollView>
      <Graph>
        <Graph.GraphContainer
          style={{
            borderRadius: 10,
            backgroundColor: '#013567',
            marginBottom: '5%',
          }}>
          {/* <VictoryChart width={380} theme={VictoryCustomTheme}>
                        <VictoryLine theme={VictoryCustomTheme}
                        animate 
                        data={data} 
                        x='quarter' 
                        y='earnings' 
                        categories={{
                            x: ['20:33', '02:06', '07:40', '13:13'],
                            y: ['5540', '5530', '5520', '5510'],    
                        }}
                        style={{
                            data:{
                                stroke: '#fff',
                                strokeWidth: 6,
                            }
                        }}
                        />
                        <VictoryAxis 
                            label='12/28/2017 07:40 PM'

                            style={{
                                grid: {
                                    stroke:'grey',
                                    opacity: .2,
                                },
                                axis: {
                                    stroke:'grey',
                                    opacity: .2,
                                },
                                axisLabel: {
                                    fontFamily: 'Open Sans Regular',
                                    fontSize: 20,
                                    padding: 40,
                                    fill: '#fff'
                                },
                                tickLabels: {
                                    fill: '#fff'
                                },
                            }}
                            domainPadding={{x: [0, 1], y: 5}}
                            />
                        <VictoryAxis
                            domain={{x: [0, 100], y: [0, 1]}}
                            dependentAxis
                            style={{
                                grid: {
                                    stroke: 'grey',
                                    opacity: .2
                                },
                                axis: {
                                    stroke:'grey',
                                    opacity: .2
                                },
                                tickLabels: {
                                    fill: '#fff',
                                }
                            }}
                            tickLabelComponent={(
                                <VictoryLabel verticalAnchor='middle' dy={30} textAnchor='end' />
                            )}
                        />
                    </VictoryChart> */}
        </Graph.GraphContainer>
      </Graph>
    </ScrollView>
  );
}
