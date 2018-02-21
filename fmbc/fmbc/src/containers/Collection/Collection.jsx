import React, { Component,createElement } from 'react';
import axios from 'axios'
import styles from './Collection.scss'
class Collection extends Component {
    constructor() {
		super()
		this.state = {
			value: '',
			showUpLoadImg: ''
		}
	}
    upLoad(e) {
		var type = ['jpg', 'png', 'jpeg', 'bmp', 'svg', 'gif'];
		var error = '';
		var num = 0;
		var fileE = e.target.files;

		// //判断类型  得到图片的类型
		var fileType = fileE[0].type.split("/")[1]
		// console.log(fileType)
		//判断大小
		var fileSize = fileE[0].size;
		// console.log(fileSize )

		// //判断上传的是否为图片的格式 并且大小是否小于2M;
		if (type.indexOf(fileType) == -1) {
			error = '请上传' + type.join() + '格式的图片';
		} else if (fileSize > 2097152) {
			error = '请上传小于2M的图片';
		}

		if (error) {
			alert(error);
			return false;
		}

		var params = new FormData();
		params.append('file', e.target.files[0]);

		axios({
			method: 'post',
			url: 'http://localhost:3000/upload',
			anync: true,
			contentType: false,
			processData: false,
			data: params
		}).then(function (res) {
			console.log(res, 'res')
		})

		// //创建文件读取对象
		var fileObj = new FileReader();
		// //设置上传图片的数据
		fileObj.readAsDataURL(fileE[0])
		var file = e.target.files[0]
		fileObj.fulAvatar = file

		fileObj.onload = () =>{
			var result = fileObj.result;
			var img = new Image();
			img.src = result;

			var oLi = createElement(
				'li',
				null,
				createElement(
					'img',
					{
						src: fileObj.result
					}
				)
			)
			this.setState({
				showUpLoadImg: oLi
			})
			num++;
			if (num >= 9) {
				alert('最多可以上传9张图片');
				return false;
			}
		}
    }
    search(e) {
	const { gameList } = this.props
	this.setState({
		value: e.target.value
	})
	let arr = []
	for (let item of gameList) {
		if ((item.matchId).toString().indexOf(e.target.value) !== -1) {
			arr.push(item)
		}
	}
	console.log(arr)
}
    render() {
        const { value, showUpLoadImg } = this.state
        return (
            <div className={styles.collection}>
            {showUpLoadImg}
			<hr />
			<input type='file' onChange={this.upLoad.bind(this)} />
            </div>
        )
    }
}

export default Collection;