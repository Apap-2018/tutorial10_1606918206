import React from 'react';
import { Loading } from '../components/Loading';
import { Appointment } from '../utils/Appointment'
import { DaftarStaffFarmasiRow } from '../components/DaftarStaffFarmasiRow';
import { TableContainer } from '../containers/TableContainer';

export class DaftarStaffFarmasi extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			loading: true,
			listStaffFarmasi: []
		}

		Appointment.getAllStaffFarmasi().then(response => {
			this.setState({
				loading: false,
				listStaffFarmasi: response.result
			})
		})
	}

	render() {
        if (this.state.loading) {
            return (
                <Loading msg="Fetching Data..."/>
            )
        } else {
            return (
                <TableContainer title="Daftar Staff Farmasi" header={['Id', 'Nama Staff Farmasi', 'Jenis']}>
                    <DaftarStaffFarmasiRow listStaffFarmasi={this.state.listStaffFarmasi}/>
                </TableContainer>
            )
        }
	}

}