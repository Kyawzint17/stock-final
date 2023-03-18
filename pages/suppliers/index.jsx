import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Home({ suppliers }) {

  function deleteSupplier(id) {
    fetch(`/api/supplier/${id}`,
      {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => {
        // alert("Deleting " + id)
        window.location.reload(false);
      })

  }

  return (
    <>
      <Head>
        <title>Suppliers</title>
      </Head>
      <h1>Suppliers</h1>
      <p style={{ margin: '0.4rem' }}>
        <Link href="/suppliers/add">+ New Supplier</Link>
      </p>
      <table>
      <thead>
          <tr>
            <th style={{width: '10rem'}}>Name</th>
            <th style={{width: '10rem'}}>Address</th>
            <th style={{width: '10rem'}}>PhoneNo</th>
            <th style={{width: '10rem'}}>Action</th>
          </tr>
        </thead>
        <tbody>
        {
          suppliers.map(supplier => {
            return (
              <tr key={supplier._id}>
                <td style={{textAlign:'center'}}>
                  <Link href={`/suppliers/${supplier._id}`}>
                    {supplier.name}
                  </Link>
                </td>
                <td style={{textAlign:'center'}}>{supplier.address}</td>
                <td style={{textAlign:'center'}}>{supplier.phoneno}</td>
                <td style={{textAlign:'center'}}>
                  <Link href={`/suppliers/update/${supplier._id}`}>Update</Link>
                  &nbsp;&nbsp;&nbsp;
                  <button onClick={() => deleteSupplier(supplier._id)}>Delete</button>
                </td>
              </tr>
            )
          })
        }
      </tbody>
      </table>
      <p>
      </p>

    </>
  )
}
export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/supplier/`)
  const suppliers = await res.json()
  console.debug('supplier 1', suppliers)
  return { props: { suppliers } }
}