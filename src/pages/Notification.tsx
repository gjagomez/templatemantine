import { Button, Paper, Text } from '@mantine/core'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import { useNotification } from '../hooks/context/Notification'
import axios from 'axios'

type ModalBodyProps = {
  title?: string
  subtitle?: string
}

function ModalBody({ title, subtitle }: ModalBodyProps) {
  return (
    <>
      {typeof title === 'string' && <h5>{title}</h5>}
      {typeof subtitle === 'string' && <p>{subtitle}</p>}
    </>
  )
}

const service = axios.create({
  baseURL: 'https://run.mocky.io/v3',
})

service.interceptors.response.use(
  res => res,
  error => {
    // if (axios.isAxiosError(error)) {
    console.log(`Error while intercept '${error.toJSON().config.url}' url`)
    // }

    return Promise.reject(error)
  }
)

export default function NotificationPage() {
  const { isOpen } = useNotification()

  useEffect(() => {
    service
      .get('7bbb9561-0611-467c-8190-830f2f341450')
      .then(({ data }) => {
        console.log('data', data)
      })
      .catch(e => {
        console.log('error', e.response.data.message, e.message)
        // console.log('toast.error', e.message, e.toJSON())
      })
  }, [])

  const handleShowToast = () => {
    toast.success(
      <ModalBody title="Success" subtitle="😀 Account has been verified" />
    )
  }

  return (
    <Paper p="md" radius="lg" shadow="xs">
      <h1>Notification</h1>
      {isOpen && <Text component="h5">I'm from Provider</Text>}
      <Button
        variant="light"
        color="pink"
        radius="md"
        onClick={handleShowToast}>
        Show Me
      </Button>
      <ToastContainer hideProgressBar pauseOnFocusLoss={false} limit={3} />
    </Paper>
  )
}
