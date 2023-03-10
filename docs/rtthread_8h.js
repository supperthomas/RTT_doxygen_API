var rtthread_8h =
[
    [ "rt_spin_lock_init", "group___i_p_c.html#ga6ffe5db0d4af48a8942ce74516b39adf", null ],
    [ "rt_spin_lock", "group___i_p_c.html#ga193443f7c046aecfad54da5aaaa65b52", null ],
    [ "rt_spin_unlock", "group___i_p_c.html#ga45dbdc25896bea9e573d32e049608ba1", null ],
    [ "rt_spin_lock_irqsave", "group___i_p_c.html#ga67a23765482ec4371efbeb12fc3714fc", null ],
    [ "rt_spin_unlock_irqrestore", "group___i_p_c.html#gaa3363dc86df5a0dbc265ec03697bcabf", null ],
    [ "rt_kprintf", "group___kernel_service.html#ga2cc5c9066908cd34d36848d8a281b472", null ],
    [ "rt_kputs", "group___kernel_service.html#ga0224c23e19af562c32f17bd455929029", null ],
    [ "errno", "group___kernel_service.html#gab03f640d90fbc5bcb75285d08a0f25ed", null ],
    [ "rt_object_get_information", "group___kernel_object.html#ga8cb85e5812b8e7c3705fb3c7702c992b", null ],
    [ "rt_object_get_length", "group___kernel_object.html#ga999d82dfa646d3c4416698f35e37ed65", null ],
    [ "rt_object_get_pointers", "group___kernel_object.html#gaa6879a7d034c9ccc56ab3a4cb8fd75f6", null ],
    [ "rt_object_init", "group___kernel_object.html#ga0a86356c83e8264841fcb83255f72014", null ],
    [ "rt_object_detach", "group___kernel_object.html#gad3a5cf0c036738c6f0ee560a62bc93be", null ],
    [ "rt_object_allocate", "group___kernel_object.html#ga661bb999394a29404c20c7f3e58e5f64", null ],
    [ "rt_object_delete", "group___kernel_object.html#ga0479fb23b766d96e9611ed32becc2797", null ],
    [ "rt_object_is_systemobject", "group___kernel_object.html#ga0b4471fdda93017477bc81ca357481ac", null ],
    [ "rt_object_get_type", "group___kernel_object.html#ga8e9948d16704c567feb38b9d98618a91", null ],
    [ "rt_object_find", "group___kernel_object.html#ga6c82dbb4ae114918c5c96d0dca3957eb", null ],
    [ "rt_custom_object_create", "group___kernel_object.html#ga75581e85adfc9cd4068c5144d19849b4", null ],
    [ "rt_custom_object_destroy", "group___kernel_object.html#ga50c46982eda3aeab85fa9e2d94302d62", null ],
    [ "rt_object_attach_sethook", "group___kernel_object.html#ga8bac83f313b9fb0215c424bec05174bd", null ],
    [ "rt_object_detach_sethook", "group___kernel_object.html#ga28dd3af85707fc6c9bf548fe53460aca", null ],
    [ "rt_object_trytake_sethook", "group___kernel_object.html#gabfce5c06de6e1cd6b661b05cb9dd6242", null ],
    [ "rt_object_take_sethook", "group___kernel_object.html#ga69054a027dcc8483b65fd48740eb3717", null ],
    [ "rt_object_put_sethook", "group___kernel_object.html#gad107a57fce56ef991d673fa21c6d065a", null ],
    [ "rt_tick_get", "group___clock.html#ga6e2aa36f263bddcddae01a91986fcdae", null ],
    [ "rt_tick_set", "group___clock.html#ga77af135da16a0b9e1c4a351f4bee6dbd", null ],
    [ "rt_tick_increase", "group___clock.html#ga29337f93377626f651dd393e1bb608fb", null ],
    [ "rt_tick_from_millisecond", "group___clock.html#gaae158e7af4e29210a5467bc2ea93ed0d", null ],
    [ "rt_tick_get_millisecond", "group___clock.html#ga76eb049ed20db0575c0f13d6343e7072", null ],
    [ "rt_tick_sethook", "group___clock.html#gab889b5b0b35c4c6a23b79a52098d985f", null ],
    [ "rt_system_timer_init", "group___clock.html#ga9f109e873cdcf963059e968cedb76c36", null ],
    [ "rt_system_timer_thread_init", "group___clock.html#gac5298e02b109e4885723f6116fb11814", null ],
    [ "rt_timer_init", "group___clock.html#ga678d29f53307113da6b1578c9d3423cb", null ],
    [ "rt_timer_detach", "group___clock.html#ga0d1aca4fc86f1dbd88945be8820793bb", null ],
    [ "rt_timer_create", "group___clock.html#ga9e6911989135de1b989dd7fe1b3543ce", null ],
    [ "rt_timer_delete", "group___clock.html#gaf6c147a1f25bd5ac9e72a142ab36a4ac", null ],
    [ "rt_timer_start", "group___clock.html#ga3aeb8f8350b3a7403d8629231396c016", null ],
    [ "rt_timer_stop", "group___clock.html#gaaef9923c8b90ede02e12826c58c6f8a2", null ],
    [ "rt_timer_control", "group___clock.html#ga15e3b76a4a58d31aaf5c992bc127615c", null ],
    [ "rt_timer_next_timeout_tick", "group___clock.html#ga51af0ff7d55ff298adfb87d276d0d678", null ],
    [ "rt_timer_check", "group___clock.html#ga3a29a70b401aa9d5c5dbb7269fd0ac57", null ],
    [ "rt_timer_enter_sethook", "group___clock.html#ga639bcf43fc3737d2c6a76d7c3f4f9414", null ],
    [ "rt_timer_exit_sethook", "group___clock.html#ga1a9452b8224df3575c9c5314ed4a3518", null ],
    [ "rt_thread_init", "group___thread.html#gacd985aa60939b95e510f144610f001b9", null ],
    [ "rt_thread_detach", "group___thread.html#ga514825b80304477ecf377d721da409b0", null ],
    [ "rt_thread_create", "group___thread.html#gacb215b161f17c26b5e19c28cd0119e7b", null ],
    [ "rt_thread_delete", "group___thread.html#ga6d64eb4d0a485461049616808f4ce177", null ],
    [ "rt_thread_self", "group___thread.html#ga6133c1b6b27d972447156db15e7c1ce7", null ],
    [ "rt_thread_find", "group___thread.html#ga789a0782597b4d7f7c6c16eacc6084a8", null ],
    [ "rt_thread_startup", "group___thread.html#ga04b743537fd099e204fc292e57b4aa5a", null ],
    [ "rt_thread_yield", "group___thread.html#ga5703a0d7351b37a1c00874a362626ea3", null ],
    [ "rt_thread_delay", "group___thread.html#ga6b18459cac67e3695447e69b997fc74e", null ],
    [ "rt_thread_delay_until", "group___thread.html#ga309d01453eb09acaee5012a2e159961c", null ],
    [ "rt_thread_mdelay", "group___thread.html#ga4ba0dbf06d5fa05f469da371ff6d2876", null ],
    [ "rt_thread_control", "group___thread.html#ga34c65d3f7d01310fe7b54b2e706b1bdc", null ],
    [ "rt_thread_suspend", "group___thread.html#gab75228a43588dc35570bce6a2c18f3f0", null ],
    [ "rt_thread_suspend_with_flag", "group___thread.html#ga537adfa695f87cdea6310ec3f66fced0", null ],
    [ "rt_thread_resume", "group___thread.html#gab4f29aff4fec96d92f6321fa7b00c379", null ],
    [ "rt_thread_timeout", "group___thread.html#ga8a0288d712bd2d99d11231d4b073c5f3", null ],
    [ "rt_thread_suspend_sethook", "group___thread.html#ga83bae9e21b23cfbf2e1c4f09654e3012", null ],
    [ "rt_thread_resume_sethook", "group___thread.html#gae051e428ad5b79744249d2658d5084b5", null ],
    [ "rt_thread_inited_sethook", "group___thread.html#gac984b444fd358e15855a0236f196bd5e", null ],
    [ "rt_thread_idle_init", "group___thread.html#gae0dcacf89c3d97272b185f7162a3e0c3", null ],
    [ "rt_thread_idle_sethook", "group___thread.html#gab943d93390d71c999debbf98fee44a0e", null ],
    [ "rt_thread_idle_delhook", "group___thread.html#gaf48521904309636f9ccdbf562199c0a5", null ],
    [ "rt_thread_idle_gethandler", "group___thread.html#gadd22f9965fffe9e940fd364f0838731f", null ],
    [ "rt_system_scheduler_init", "group___thread.html#ga5aa2c0c67999e20ce8693ad3c8e624f0", null ],
    [ "rt_system_scheduler_start", "group___thread.html#ga9aa8a561e0caf5e13126834c4f4bb681", null ],
    [ "rt_schedule", "group___thread.html#gae9f99bb5e2e2032b10ddda7a03eefe24", null ],
    [ "rt_schedule_insert_thread", "group___thread.html#gae3b532499fffe26f36b7ed8b9e3e4654", null ],
    [ "rt_schedule_remove_thread", "group___thread.html#ga11893d937cb7c879abb12f8bfa4be164", null ],
    [ "rt_enter_critical", "group___thread.html#gac4c796a7c2031213d9d2416c6e4a5b6a", null ],
    [ "rt_exit_critical", "group___thread.html#ga35c56c2d56e2bb0f2df95abc752143df", null ],
    [ "rt_critical_level", "group___thread.html#gaf3f894e8efadefda238a5e5ab45c7e21", null ],
    [ "rt_scheduler_sethook", "group___thread.html#ga1af67d388db8019327b5f86428e2ed14", null ],
    [ "rt_scheduler_switch_sethook", "group___thread.html#ga4685884789cfcd32a5a7626184cb4d7b", null ],
    [ "rt_mp_init", "group___m_m.html#ga1a6bc99e5cb8663be2f1882410448f94", null ],
    [ "rt_mp_detach", "group___m_m.html#ga65fc7bef71be142744e517eebe13fc04", null ],
    [ "rt_mp_create", "group___m_m.html#gabe8c74161a1d6f456e67efb2c16195b7", null ],
    [ "rt_mp_delete", "group___m_m.html#gace1b1218858d5ec8a95be226ae897f26", null ],
    [ "rt_mp_alloc", "group___m_m.html#ga531984d42851ffa0fd7a14bf67f15c22", null ],
    [ "rt_mp_free", "group___m_m.html#ga65371665abde3bed7379c72d5ea225e2", null ],
    [ "rt_mp_alloc_sethook", "group___m_m.html#ga358d3559267d1c8c66c836ed2e08433b", null ],
    [ "rt_mp_free_sethook", "group___m_m.html#gafd43b13db5623925756b7a3968aa3b01", null ],
    [ "rt_system_heap_init", "group___m_m.html#gafa6feb60f6204d1783bc3bc324b886e7", null ],
    [ "rt_malloc", "group___m_m.html#ga27d146d7a9082765703ab218def0617f", null ],
    [ "rt_free", "group___m_m.html#ga6c1c24262479e6946fd04823878177f9", null ],
    [ "rt_realloc", "group___m_m.html#ga43bb369b655b2662fa0b3d654f447a67", null ],
    [ "rt_calloc", "group___m_m.html#gacf5395171f8ad2ad6bc5e1c61b8b0d88", null ],
    [ "rt_malloc_align", "group___m_m.html#gaf2654f08787ce7935c635c0343970f6a", null ],
    [ "rt_free_align", "group___m_m.html#gabf1ea8f43781620e7b08fb1868e32b92", null ],
    [ "rt_memory_info", "group___m_m.html#ga6a043ee84954692789696a255ea65699", null ],
    [ "rt_malloc_sethook", "group___m_m.html#ga909761c80493569b64558225d7f89e77", null ],
    [ "rt_free_sethook", "group___m_m.html#gaf556549fc541bfc634f37f2dca004547", null ],
    [ "rt_smem_init", "group___m_m.html#gaf3ee8887d4ace66606a925237e199ad6", null ],
    [ "rt_smem_detach", "group___m_m.html#gaf444d6040e6a1ef09ab9f95e893b8d40", null ],
    [ "rt_smem_alloc", "group___m_m.html#ga80448818ad067205d76e94f8c97e5fe9", null ],
    [ "rt_smem_realloc", "group___m_m.html#gab3db5c0cc04b7a3e1d06c2a6da2e6d5c", null ],
    [ "rt_smem_free", "group___m_m.html#ga0be498288489171f107c04ed44314ef0", null ],
    [ "rt_sem_init", "group___i_p_c.html#ga023e00dd1ae86ddbeb2dbf92771e17ea", null ],
    [ "rt_sem_detach", "group___i_p_c.html#ga7dd3560a50be21e132c71f622870c500", null ],
    [ "rt_sem_create", "group___i_p_c.html#ga61a4960ff4a173f1d1c35ede42e1227f", null ],
    [ "rt_sem_delete", "group___i_p_c.html#ga0e45d2b96aab649832b6756d68629bbe", null ],
    [ "rt_sem_take", "group___i_p_c.html#gad5de76667b198615400bab78afba6604", null ],
    [ "rt_sem_take_interruptible", "group___i_p_c.html#gadd87e2484582c79465a6ce9b2f9351fd", null ],
    [ "rt_sem_take_killable", "group___i_p_c.html#gaa393b17a51e88199253e3819175ab5f9", null ],
    [ "rt_sem_trytake", "group___i_p_c.html#gaf24da991e29df68a49062d89b95c7de5", null ],
    [ "rt_sem_release", "group___i_p_c.html#gad9a5760bc4c7faeb08a7d9c112506f76", null ],
    [ "rt_sem_control", "group___i_p_c.html#ga569a571566b70682422a8fc5bd53f06f", null ],
    [ "rt_mutex_init", "group___i_p_c.html#ga90c29e470fff8981a976ec7f9bb0546e", null ],
    [ "rt_mutex_detach", "group___i_p_c.html#ga7a8b48c0e6884e2c22d08e9e7e98a613", null ],
    [ "rt_mutex_create", "group___i_p_c.html#ga5ce96ed48d83086aab6ecadebac6d0c6", null ],
    [ "rt_mutex_delete", "group___i_p_c.html#ga8a74f51362fc566500bec135599dd5a9", null ],
    [ "rt_mutex_drop_thread", "group___i_p_c.html#ga8ca03f1e5607cda3f739aff4048b8372", null ],
    [ "rt_mutex_setprioceiling", "group___i_p_c.html#ga7dbba080eb21d82b3877d6e439bdfd28", null ],
    [ "rt_mutex_getprioceiling", "group___i_p_c.html#gaef430f1dbc50af1098589232fb54508c", null ],
    [ "rt_mutex_take", "group___i_p_c.html#gaa3b10695d4c703d2efbe67cce128d7d5", null ],
    [ "rt_mutex_trytake", "group___i_p_c.html#gada983d7f4521fdb0f7a5cf6d0a1ac800", null ],
    [ "rt_mutex_take_interruptible", "group___i_p_c.html#ga42dfa4d42739821c4b58d82bb76109b0", null ],
    [ "rt_mutex_take_killable", "group___i_p_c.html#ga7051d1f083e64af332ca952cccb492fe", null ],
    [ "rt_mutex_release", "group___i_p_c.html#gad49c2ee6dc578e6687919f01a4ac5137", null ],
    [ "rt_mutex_control", "group___i_p_c.html#ga1e12cce5d8252dd3cc764ba00d429ae9", null ],
    [ "rt_event_init", "group___i_p_c.html#gab0fad38227b1ebd616a807a09f2eb772", null ],
    [ "rt_event_detach", "group___i_p_c.html#ga43f0b137c7e6d5c2152f6b1d39b57616", null ],
    [ "rt_event_create", "group___i_p_c.html#ga3d752d98e73c0adcdd2b0df24e67efdb", null ],
    [ "rt_event_delete", "group___i_p_c.html#ga840d6210713f186fe248a032a68d5e6d", null ],
    [ "rt_event_send", "group___i_p_c.html#ga92efdf32aaf073d733f3bafd02d730e5", null ],
    [ "rt_event_recv", "group___i_p_c.html#gaf01ab3359471613143fb0a1bc4317baa", null ],
    [ "rt_event_recv_interruptible", "group___i_p_c.html#ga02aef6da1f8a5504424b9302991adc4b", null ],
    [ "rt_event_recv_killable", "group___i_p_c.html#ga6657cd85ef9e25e1f4002aa313865853", null ],
    [ "rt_event_control", "group___i_p_c.html#ga3aeb964ccccdde76bb5e247c0a913fea", null ],
    [ "rt_mb_init", "group___i_p_c.html#gac05bd0c179f754c32f83a7b013e8953b", null ],
    [ "rt_mb_detach", "group___i_p_c.html#ga3312c6094d9c21af33a74f444a8c5993", null ],
    [ "rt_mb_create", "group___i_p_c.html#ga7719d644b6f58399894dec1c6353ac37", null ],
    [ "rt_mb_delete", "group___i_p_c.html#ga71e9e49401cbbed83515ace6fa13c27b", null ],
    [ "rt_mb_send", "group___i_p_c.html#gac2b0d532eab2989b713fdb0b1fac6665", null ],
    [ "rt_mb_send_wait", "group___i_p_c.html#gad39b8b365c2168d697c89de80f0498d0", null ],
    [ "rt_mb_send_wait_interruptible", "group___i_p_c.html#gad97bb963f28af671bd3adc9a9b8ad2f7", null ],
    [ "rt_mb_send_wait_killable", "group___i_p_c.html#ga329a6f3cdd8a74024a80ebe4b7fa5abd", null ],
    [ "rt_mb_urgent", "group___i_p_c.html#gabc9da3320cdbeee5aa86e65cdf48f928", null ],
    [ "rt_mb_recv", "group___i_p_c.html#ga4fe9492b9f797650c8a1ced2e9d8c9ae", null ],
    [ "rt_mb_recv_interruptibale", "group___i_p_c.html#ga1ccea7ce9417dc7d1a446ed085e24012", null ],
    [ "rt_mb_recv_killable", "group___i_p_c.html#ga007f010abaed3f902dff9e214e256294", null ],
    [ "rt_mb_control", "group___i_p_c.html#ga18c381ffe3aab6dea429c98ecfcea44c", null ],
    [ "rt_mq_init", "group___i_p_c.html#gaac5b76df894964c908271ab0951f7e86", null ],
    [ "rt_mq_detach", "group___i_p_c.html#ga1ed6238494fac3ab081a90d9c563a8f3", null ],
    [ "rt_mq_create", "group___i_p_c.html#ga35acff654ecee2a76d5555e9683d8470", null ],
    [ "rt_mq_delete", "group___i_p_c.html#gacbf0bfedc6677ca8357d8b345c9026c9", null ],
    [ "rt_mq_send", "group___i_p_c.html#gab3d128f328e2e979f0ee86d633937e4e", null ],
    [ "rt_mq_send_interrupt", "group___i_p_c.html#gaad2e05be236e19973bb58803816ab404", null ],
    [ "rt_mq_send_killable", "group___i_p_c.html#ga77d62ff6c3c18cc822e8ad6f71a7b691", null ],
    [ "rt_mq_send_wait", "group___i_p_c.html#ga0a041666764bd3a737e6451e6e40887a", null ],
    [ "rt_mq_send_wait_interruptible", "group___i_p_c.html#gac888fea9179aa21a44fccb70771fac69", null ],
    [ "rt_mq_send_wait_killable", "group___i_p_c.html#ga52ebc10b837cd2245a9be2b26a4ecfb4", null ],
    [ "rt_mq_urgent", "group___i_p_c.html#gafb1abee716f2f5c24a36aff2ffd32c75", null ],
    [ "rt_mq_recv", "group___i_p_c.html#ga1a676c587c7b403b2585a7152905e39a", null ],
    [ "rt_mq_recv_interruptible", "group___i_p_c.html#ga44827d42b5afa5fc5d1660c9f400e6a2", null ],
    [ "rt_mq_recv_killable", "group___i_p_c.html#ga86685c39d7b8d02e85c02a9f6b561881", null ],
    [ "rt_mq_control", "group___i_p_c.html#ga3b1ec7b2bfbc8029b0200755505d7c55", null ],
    [ "rt_thread_defunct_enqueue", "group___i_p_c.html#ga0e32f5a4ae6b0da7771e08b061eba1ee", null ],
    [ "rt_thread_defunct_dequeue", "group___i_p_c.html#ga35f8bcf6aa8d872a07261a8faaa026ba", null ],
    [ "rt_device_find", "group___device.html#ga7fb604dd486fbf5e48004b4d94d8eb3e", null ],
    [ "rt_device_register", "group___device.html#gaaa44b227c43321faffb198ef9c0bb17e", null ],
    [ "rt_device_unregister", "group___device.html#ga76cf284581e36b7e2244398efbf850b5", null ],
    [ "rt_device_create", "group___device.html#ga61ad2adb3c48709087465f61c244733b", null ],
    [ "rt_device_destroy", "group___device.html#ga74b22c6a450071b23774fe24bf6fc78c", null ],
    [ "rt_device_set_rx_indicate", "group___device.html#ga07dfc7fd340b9449d2bd732159ed237f", null ],
    [ "rt_device_set_tx_complete", "group___device.html#gae6340392a3848e3f5e324aa984375b07", null ],
    [ "rt_device_init", "group___device.html#ga04892007706fe586a1db33284571be7e", null ],
    [ "rt_device_open", "group___device.html#gac0cd9f7a81722d69e8720ea4750c17a2", null ],
    [ "rt_device_close", "group___device.html#ga914535247ea0e5477002553ad38b1482", null ],
    [ "rt_device_read", "group___device.html#ga51642e30d61927aece593ee23d090b17", null ],
    [ "rt_device_write", "group___device.html#ga4f1525de3aec696b4781b790df9759df", null ],
    [ "rt_device_control", "group___device.html#ga40ed6da2d5ea7b1e28de21ff439db963", null ],
    [ "rt_interrupt_enter", "group___kernel.html#ga020fb2151c8cbf1c1c0c59e615dc8d9e", null ],
    [ "rt_interrupt_leave", "group___kernel.html#gafcbcfbf20707e21e8922a837bba4908d", null ],
    [ "rt_interrupt_get_nest", "group___kernel.html#gaa6725f61bed47e0d5ac383eccf14d3f1", null ],
    [ "rt_interrupt_enter_sethook", "rtthread_8h.html#a7fe1feee9c0028f9bb573f599394d765", null ],
    [ "rt_interrupt_leave_sethook", "rtthread_8h.html#a958860e3d739bbf4f7390a2591a9cfc4", null ],
    [ "rt_vsprintf", "group___kernel_service.html#ga5dbf76c6bc240ab7743507e334b93966", null ],
    [ "rt_vsnprintf", "group___kernel_service.html#gac2d4cd92e18dd8afc759f00a1830aab6", null ],
    [ "rt_sprintf", "group___kernel_service.html#ga016ffbbe874d3582a3165001166fd4eb", null ],
    [ "rt_snprintf", "group___kernel_service.html#ga940bcced7e89f112ac04bd715fdf4f24", null ],
    [ "rt_get_errno", "group___kernel_service.html#ga17b8724a14746aa74d7c2969c3289fbc", null ],
    [ "rt_set_errno", "group___kernel_service.html#gae4550e2e69a249c81e4cb33b92786deb", null ],
    [ "_rt_errno", "group___kernel_service.html#ga02ccef35d98a60385ce86d14c0bad9d0", null ],
    [ "rt_strerror", "group___kernel_service.html#ga6dac97b487aa32006a7ad0f9bee7e92c", null ],
    [ "__rt_ffs", "group___kernel_service.html#gaf225812decad1a6d9036626273ba9e65", null ],
    [ "rt_memset", "group___kernel_service.html#ga3a32f9ba466a610a23e127c74f37d7c2", null ],
    [ "rt_memcpy", "group___kernel_service.html#gacbe2d70e90f1ce1ea00dd61621b97981", null ],
    [ "rt_memmove", "group___kernel_service.html#gaea53e9b7142ae50590412a22c8705dad", null ],
    [ "rt_memcmp", "group___kernel_service.html#gae03e20acd7abff1bc684e4335511f136", null ],
    [ "rt_strdup", "group___kernel_service.html#ga3424d273c715bc14e81e2e608287216a", null ],
    [ "rt_strnlen", "group___kernel_service.html#ga2e706a6b98ed9309cef7e656e23de359", null ],
    [ "rt_strstr", "group___kernel_service.html#gad986e7ef38f22c0c612e8467a25a19ef", null ],
    [ "rt_strcasecmp", "group___kernel_service.html#ga819e27f174eb16452a0c5c0bf6d0dc36", null ],
    [ "rt_strcpy", "group___kernel_service.html#gad8d965e7d74d0ca91011346b87841a4f", null ],
    [ "rt_strncpy", "group___kernel_service.html#ga957603c5eb06432c5344d876280e56a2", null ],
    [ "rt_strncmp", "group___kernel_service.html#ga1a4ff96dd17dfcd6ca974ae21a1df0f9", null ],
    [ "rt_strcmp", "group___kernel_service.html#gaad8035bddfb5177b811e3fc2f15508c4", null ],
    [ "rt_strlen", "group___kernel_service.html#ga743d665f6558666ee9bbfa894ee68178", null ],
    [ "rt_show_version", "group___kernel_service.html#ga11ecdcdb5b09e6e18b52625c1e904dca", null ]
];