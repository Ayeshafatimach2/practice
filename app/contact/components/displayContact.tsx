import { contactTypes } from '@/type/componentsType'


export default function DisplayContact(props: { contactData: contactTypes[] }) {
  return (
    <div>


      <div >
        <table>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Message</th>
          </tr>
          {props.contactData.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.phone}</td>
                <td>{item.email}</td>
                <td>{item.message}</td>
              </tr>
            )
          })}
        </table>
      </div>

    </div>
  )
}

