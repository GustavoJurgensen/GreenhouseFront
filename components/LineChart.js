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
      borderWidth: 3,
      fillColor: "rgba(195, 40, 96, 0.1)",
      strokeColor: "rgba(195, 40, 96, 1)",
      pointColor: "rgba(195, 40, 96, 1)",
      tension: 0.5,
      data: props.yDataIn
    },
    {
      label: 'Outdoor',
      data: props.yDataOut,
      fill: false,
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
