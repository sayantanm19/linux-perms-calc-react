import React, { useState } from "react";

import FinalDisplay from "./FinalDisplay";

function PermissionSelector() {
  const [specialBit, setSpecialBit] = useState(0);
  const [userBit, setUserBit] = useState(0);
  const [groupBit, setGroupBit] = useState(0);
  const [otherBit, setOtherBit] = useState(0);

  return (
    <div>
      <h1>Permissions</h1>
      <form className="permission-form">
        {/* Special Section */}
        <div className="form-section">
          <div className="form-text">Special Bits</div>
          <div className="bits-group">
            <div className="check-group">
              <div className="check-text">Set UID</div>
              <input
                type="checkbox"
                onClick={(e) => {
                  setSpecialBit(
                    e.target.checked ? specialBit + 1 : specialBit - 1
                  );
                }}
              />
            </div>
            <div className="check-group">
              <div className="check-text">Set GUID</div>
              <input
                type="checkbox"
                onClick={(e) => {
                  setSpecialBit(
                    e.target.checked ? specialBit + 2 : specialBit - 2
                  );
                }}
              />
            </div>
            <div className="check-group">
              <div className="check-text">Sticky Bit</div>
              <input
                type="checkbox"
                onClick={(e) => {
                  setSpecialBit(
                    e.target.checked ? specialBit + 4 : specialBit - 4
                  );
                }}
              />
            </div>
          </div>
        </div>

        {/* User Section */}
        <div className="form-section">
          <div className="form-text">User Bits</div>
          <div className="bits-group">
            <div className="check-group">
              <div className="check-text">Execute</div>
              <input
                type="checkbox"
                onClick={(e) => {
                  setUserBit(e.target.checked ? userBit + 1 : userBit - 1);
                }}
              />
            </div>
            <div className="check-group">
              <div className="check-text">Read</div>
              <input
                type="checkbox"
                onClick={(e) => {
                  setUserBit(e.target.checked ? userBit + 2 : userBit - 2);
                }}
              />
            </div>
            <div className="check-group">
              <div className="check-text">Write</div>
              <input
                type="checkbox"
                onClick={(e) => {
                  setUserBit(e.target.checked ? userBit + 4 : userBit - 4);
                }}
              />
            </div>
          </div>
        </div>

        {/* Group Section */}
        <div className="form-section">
          <div className="form-text">Group Bits</div>
          <div className="bits-group">
            <div className="check-group">
              <div className="check-text">Execute</div>
              <input
                type="checkbox"
                onClick={(e) => {
                  setGroupBit(e.target.checked ? groupBit + 1 : groupBit - 1);
                }}
              />
            </div>
            <div className="check-group">
              <div className="check-text">Read</div>
              <input
                type="checkbox"
                onClick={(e) => {
                  setGroupBit(e.target.checked ? groupBit + 2 : groupBit - 2);
                }}
              />
            </div>
            <div className="check-group">
              <div className="check-text">Write</div>
              <input
                type="checkbox"
                onClick={(e) => {
                  setGroupBit(e.target.checked ? groupBit + 4 : groupBit - 4);
                }}
              />
            </div>
          </div>
        </div>

        {/* Other Section */}
        <div className="form-section">
          <div className="form-text">Other Bits</div>
          <div className="bits-group">
            <div className="check-group">
              <div className="check-text">Execute</div>
              <input
                type="checkbox"
                onClick={(e) => {
                  setOtherBit(e.target.checked ? otherBit + 1 : otherBit - 1);
                }}
              />
            </div>
            <div className="check-group">
              <div className="check-text">Read</div>
              <input
                type="checkbox"
                onClick={(e) => {
                  setOtherBit(e.target.checked ? otherBit + 2 : otherBit - 2);
                }}
              />
            </div>
            <div className="check-group">
              <div className="check-text">Write</div>
              <input
                type="checkbox"
                onClick={(e) => {
                  setOtherBit(e.target.checked ? otherBit + 4 : otherBit - 4);
                }}
              />
            </div>
          </div>
        </div>
      </form>

      <FinalDisplay
        specialBit={specialBit}
        userBit={userBit}
        groupBit={groupBit}
        otherBit={otherBit}
      />
    </div>
  );
}

export default PermissionSelector;
