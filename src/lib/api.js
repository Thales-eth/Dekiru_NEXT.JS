import UserService from '@/services/user.service'

export async function getHomePageStudents() {
    const users = await UserService.getHomePageStudents().then(({ data }) => data)
    return users
}
