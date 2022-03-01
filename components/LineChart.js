import { Line } from "react-chartjs-2"
import styles from '../styles/LineChart.module.css'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
)

export default function LineChart(props) {
  const options = {
    scales: {
      x: {
        ticks: {
          // display:false,
          autoSkip: true,
          maxTicksLimit: 4,
          maxRotation: 0,
          minRotation: 0,
        }
      },
    },
    elements: {
      point: {
        radius: 0
      }
    },
  }
  const data = {
    labels: props.xData,
    datasets: [{
      label: 'Indoor',
      data: props.yDataIn,
      fill: 'start',
      borderWidth: 3,
      borderColor: 'rgba(99,177,117,0.8)',
      backgroundColor: gradient,
      tension: 0.5
    },
    {
      label: 'Outdoor',
      data: props.yDataOut,
      fill: true,
      borderWidth: 2,
      borderColor: 'rgba(40, 71, 47, 0.8)',
      backgroundColor: 'rgba(40, 71, 47, 0.2)',
      tension: 0.5
    },]
  };
  return (
    <div className={styles.card}>
      <Line data={data} options={options} layout="" />
    </div>
  )
}
