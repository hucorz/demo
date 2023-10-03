// 导入three
import * as THREE from 'three'
// 导入轨道控制器
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
// 导入 lil.gui
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js' 

// 创建场景
const scene = new THREE.Scene()

// 创建相机
const camera = new THREE.PerspectiveCamera(
    75,  // 视角
    window.innerWidth / window.innerHeight, // 宽高比
    0.1, // 近平面
    1000  // 远平面
) 

// 创建渲染器, 看到的画面就是渲染器渲染出来的
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)


/************ 创建Box *************/
// 创建几何体
const geometry = new THREE.BoxGeometry(1, 1, 1)
// 创建材质
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
// 创建网格
const cube = new THREE.Mesh(geometry, material)

// 将网格添加到场景中
// scene.add(cube)

/************ 利用顶点和索引创建几何体 *************/
//#region
// 一个平面由6个顶点组成

// 创建几何体
const geometry2 = new THREE.BufferGeometry();
// 创建顶点数据
const vertices = new Float32Array([
    -1.0, -1.0, 0.0,
    1.0, -1.0, 0.0,
    1.0, 1.0, 0.0,
    -1, -1, 0,
    1, 1, 0,
    -1, 1, 0
])
// 创建顶点属性,三个为一组，逆时针为正面
geometry2.setAttribute('position', new THREE.BufferAttribute(vertices, 3))
console.log('geometry2', geometry2);

// 创建材质
const material2 = new THREE.MeshBasicMaterial({ 
    color: 0x00ff00,
    wireframe: true,
    side: THREE.DoubleSide
})
const plane = new THREE.Mesh(geometry2, material2)
// scene.add(plane)

// 利用索引使得顶点复用

const geometry3 = new THREE.BufferGeometry();
// 创建顶点数据
const vertices2 = new Float32Array([
    -1.0, -1.0, 0.0, // 0
    1.0, -1.0, 0.0, // 1
    1.0, 1.0, 0.0, // 2
    -1, 1, 0, // 3
])
// 创建顶点属性,三个为一组，逆时针为正面
geometry3.setAttribute('position', new THREE.BufferAttribute(vertices2, 3))
// 创建索引
const indices = new Uint16Array([
    0, 1, 2,
    0, 2, 3
])
// 创建索引属性
geometry3.setIndex(new THREE.BufferAttribute(indices, 1))
console.log('geometry3', geometry3);

// 创建材质
const material3 = new THREE.MeshBasicMaterial({
    color: 0x00ff00,
    wireframe: true,
    side: THREE.DoubleSide
})
const plane2 = new THREE.Mesh(geometry3, material3)
// scene.add(plane2)
//#endregion


/************ 其他设置 *************/
//#region 
// 设置相机位置
camera.position.z = 5
camera.position.y = 2
camera.position.x = 2
camera.lookAt(0, 0, 0)

// 添加世界坐标轴
const axesHelper = new THREE.AxesHelper(5)
scene.add(axesHelper)


// 添加轨道控制器
const controls = new OrbitControls(camera, renderer.domElement)
// 设置带阻尼的惯性
controls.enableDamping = true
// 设置阻尼系数
controls.dampingFactor = 0.1

// 渲染函数
function animate() {
    controls.update()
    requestAnimationFrame(animate);
    // 旋转
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;
    // 渲染
    renderer.render(scene, camera);
}

// 渲染
animate()

// 监听窗口变化
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
})

let eventObj = {
    Fullscreen: function() {
        document.body.requestFullscreen()
    },
    ExitFullscreen: function() {
        document.exitFullscreen()
    }
}

const gui = new GUI()
gui.add(eventObj, 'Fullscreen')
gui.add(eventObj, 'ExitFullscreen')
let folder = gui.addFolder('cube')
folder.add(cube.position, 'x', -3, 3, 0.01).name('x')
folder.add(cube.position, 'y', -3, 3, 0.01).name('y')
folder .add(cube.position, 'z', -3, 3, 0.01).name('z')
//#endregion

