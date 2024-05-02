import React from "react";

export default function Card({
  themeColor,
  users,
  type,
  price,
  noEmail,
  noContacts,
  noCoffee,
}) {
  return (
    <>
      <div className="card" style={{ backgroundColor: themeColor.primary }}>
        <div className="sub_type">
          <h4>{type}</h4>
          <h2>$ {price}</h2>
        </div>

        <div
          className="sub_desc"
          style={{ backgroundColor: themeColor.secondary }}
        >
          <div className="sub-desc-items">
            <ul style={{ color: themeColor.textColor }}>
              <li>{users} full user</li>
              <li>{noEmail} Email Previews</li>
              <li>{noContacts} contacts per client</li>
              <li>{noCoffee} coffee cups</li>
            </ul>
          </div>
          <div className="btn">
            <a href="#" style={{backgroundColor: themeColor.primary}}>
              buy now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
