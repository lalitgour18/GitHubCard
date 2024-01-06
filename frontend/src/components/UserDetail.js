import React from 'react'

export default function UserDetail({urldata}) {
    
  return (
    urldata&&
    <div className="flex justify-center items-center mt-4">
        <div className="rounded-xl flex flex-col sm:flex-row">
            <div className='w-full sm:w-2/5'>
                <img className='w-full' src={urldata.data.avatar_url} alt="User Avatar" />
            </div>
            <div className='bg-yellow-300 px-3 w-full sm:w-3/5 flex flex-col justify-around'>
                <div>Username: <span>{urldata.data.login}</span></div>
                <div>Name: <span>{urldata.data.name}</span></div>
                <div>No. of public repos: <span>{urldata.data.public_repos}</span></div>
                <div>No. of public gists: <span>{urldata.data.public_gists}</span></div>
                <div>created_at: <span>{urldata.data.created_at.split("T")[0]}</span></div>
            </div>
        </div>
    </div>

  )
}

// Username ( login )
// Name ( name )
// No. of public repos ( public_repos )
// No. of public gists ( public_gists )
// Profile created at in time format of YYYY-MM-DD. ( created_at )