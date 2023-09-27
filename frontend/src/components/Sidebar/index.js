import { FaChartBar, FaHome, FaIdCardAlt, FaTimes, FaUserAlt } from "react-icons/fa"
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import { Container, Content } from "./styles"
import React from "react"
import SidebarItem from "../SidebarItem"

const Sidebar = ({ active }) => {

    const closeSidebar = () => {
        active(false)
    }

    return (
        <Container sidebar={active}>
            <FaTimes onClick={closeSidebar} />
            <Content>
                <SidebarItem Icon={FaHome} Text="Home" />
                <SidebarItem Icon={FaChartBar} Text="Registro" />
                <SidebarItem Icon={ManageSearchIcon} Text="Consulta" />
                <SidebarItem Icon={FaUserAlt} Text="Morador" />
                <SidebarItem Icon={FaHome} Text="Apartamentos" />
                <SidebarItem Icon={FaIdCardAlt} Text="Funcionários" />
            </Content>
        </Container>
    )
}

export default Sidebar;
